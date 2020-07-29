import gql from 'graphql-tag';

export default gql`
    mutation($food: String) {
        beer(food: $food) {
            name
            image
            id
            abv
        }
    }
`;
