import gql from 'graphql-tag';

export default gql`
    query($id: String) {
        singleBeer(id: $id) {
            name
            description
            abv
            foodPairing
            image
        }
    }
`;
