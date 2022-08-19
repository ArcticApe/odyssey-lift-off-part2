const resolvers = {
    Query: {
        // returns an array of Track that will be used to populate
        // the hompage grid of our web client 
        tracksForHome: (_, __, {dataSources}) => {
          return dataSources.trackAPI.getTracksForHome();
        }
    },
    Track: {    
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
    },
};

module.exports = resolvers;