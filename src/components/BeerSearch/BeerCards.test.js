import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BeerCards from './BeerCards';

describe('<BeerCards/>', () => {
    test('should render component with an image, name, and abv', async () => {
        let component = render(
            <BeerCards
                beerData={{
                    beer: [
                        {
                            image: 'http://www.myimage.com/image',
                            name: 'name text',
                            abv: 'abv text',
                        },
                    ],
                }}
            />
        );
        let image = await component.findByTestId('BeerCardImg');
        let name = await component.getByText('name text');
        let abv = await component.getByText('Abv: abv text');

        expect(image.src).toEqual('http://www.myimage.com/image');
        expect(name).toBeTruthy();
        expect(abv).toBeTruthy();
    });
    test('should render default image when no image is available', async () => {
        let component = render(
            <BeerCards
                beerData={{
                    beer: [
                        {
                            image: null,
                        },
                    ],
                }}
            />
        );
        let image = await component.findByTestId('BeerCardImg');

        expect(image.src).toEqual(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaBxwVbcQGmKgrq4rGNOVcrGjfxM4EgZj9Ow&usqp=CAU'
        );
    });

    test('should call the onClick prop callback', async () => {
        let onClickSpy = jest.fn();
        let component = render(
            <BeerCards
                beerData={{
                    beer: [
                        {
                            id: '123',
                            image: null,
                        },
                    ],
                }}
                onClick={onClickSpy}
            />
        );
        let card = await component.getByTestId('Cards');
        fireEvent.click(card);

        expect(onClickSpy).toHaveBeenCalledWith('123');
    });
});
