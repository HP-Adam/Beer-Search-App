import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useQuery } from '@apollo/react-hooks';
import BeerInfo from './BeerInfo';
import { execute } from 'apollo-boost';

jest.mock('@apollo/react-hooks', () => ({
    useQuery: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    useParams: () => ({ id: '123' }),
}));

describe('<BeerInfo/>', () => {
    test('should render component with individual beer info and image', async () => {
        useQuery.mockImplementationOnce(() => ({
            data: {
                singleBeer: {
                    name: 'Beer Name',
                    image: 'http://fakeimage.com/',
                    description: 'Beer Description',
                    abv: 'Beer ABV',
                    foodPairing: ['food item 1'],
                },
            },
        }));
        let component = render(<BeerInfo />);
        let title = await component.getAllByText('Beer Name');
        let image = await component.getByTestId('BeerImage');
        let desc = await component.getByText('Beer Description');
        let abv = await component.getByText('Abv: Beer ABV');
        let flist = await component.getByText('food item 1');

        expect(title).toBeTruthy();
        expect(image.src).toEqual('http://fakeimage.com/');
        expect(desc).toBeTruthy();
        expect(abv).toBeTruthy();
        expect(flist).toBeTruthy();
    });
    test('if no data exists, nothing should render', async () => {
        useQuery.mockImplementationOnce(() => ({ data: null }));
        let component = render(<BeerInfo />);

        try {
            await component.getByTestId('BeerInfo');
            // if component does exist purposely fail the test
            expect(true).toEqual(false);
        } catch (e) {
            expect(e.message).toContain(
                'Unable to find an element by: [data-testid="BeerInfo"]'
            );
        }
    });
});
