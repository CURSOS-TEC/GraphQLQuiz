var express = require('express');
var express_graphql = require('express-graphql');
var {buildSchema} = require ('graphql');
var {basic_sports} = require ('./sample-data.json');
var schema = buildSchema(
    `type Query {
        sport(id: Int!): SoaSport
        sports(category: String): [SoaSport]
        allsports :  [SoaSport]
    },
    type Mutation {
        updateSportCategory(id: Int!, category: String!): SoaSport
        updateSportIcon(category: String!, icon: String!): [SoaSport]
    },
    type SoaSport {
        soaId: Int
        title: String
        category: String
        description: String
        icon: String
    }
    `);
var soaSports = basic_sports;

var getSportById = function (args){
    var id = args.id;
    return soaSports.filter( sport => {
        return sport.soaId == id;
    })[0];
}

var updateSportsCategory = function (args){
    var id = args.id;
    var category = args.category;
    return soaSports.filter( sport => {
        if(sport.soaId == id){
            sport.category = category;
            return sport;
        }
    })[0];
}


var getSports = function (args){
    if (args.category){
        return soaSports.filter(
            sport => {
                return sport.category === args.category;
            }
        );
    }else {
        return soaSports;
    }
}

var updateSportsCategoryIcon = function (args){
    var category = args.category;
    var icon = args.icon
    return soaSports.filter( sport => {
        if(sport.category == category){
            sport.icon = icon;
            return sport;
        }
    });
}

var getAllsports = function (){
    return basic_sports;
}


var root = {
    message: () => 'SOA4ID SportTEC',
    sport: getSportById,
    sports: getSports, 
    updateSportCategory: updateSportsCategory,
    updateSportIcon: updateSportsCategoryIcon,
    allsports: () => basic_sports
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));