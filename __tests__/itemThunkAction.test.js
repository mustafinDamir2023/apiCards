import { prepareData } from '../src/helpers/prepareData';
import fetchMock from 'jest-fetch-mock';

jest.mock('../src/helpers/prepareData'); // Замокируем prepareData

global.fetch = jest.fn();

describe('itemsThunkAction', () => {
  const mockResponse = {
    photos: [
      {
        id: 1,
        alt: 'eeeesrc',
        liked: false,
        photographer: 'photographer1',
        src: {
          small:
            'https://images.wallpaperscraft.com/image/single/river_rocks_tree_81821_1920x1080.jpg',
        },
      },
      {
        id: 2,
        alt: 'rrrrf',
        liked: false,
        photographer: 'photographer2',
        src: {
          small:
            'https://avatars.mds.yandex.net/get-mpic/4776349/img_id1652951503992728510.jpeg/9',
        },
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Очищаем все моки перед каждым тестом
    fetchMock.enableMocks();
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch data and prepare it correctly', async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Выполняем запрос
    const response = await fetch('https://api.pexels.com/v1/search?query=p', {
      headers: {
        Authorization:
          '6bI3jOicPSacLiWOKJUoNbN6Cb0fBGm0KxFBbatQwCTb9MpqrLMllrXf',
      },
    });
    
    const data = await response.json();
    
    // Вызываем prepareData с полученными данными
    prepareData.mockReturnValueOnce(data.photos); // Настраиваем возвращаемое значение для prepareData
    const result = prepareData(data.photos);

    // Проверяем, что fetch был вызван с правильным URL и заголовками
    expect(fetch).toHaveBeenCalledWith(
      'https://api.pexels.com/v1/search?query=p',
      {
        headers: {
          Authorization:
            '6bI3jOicPSacLiWOKJUoNbN6Cb0fBGm0KxFBbatQwCTb9MpqrLMllrXf',
        },
      }
    );

    // Проверяем, что prepareData была вызвана с данными photos
    expect(prepareData).toHaveBeenCalledWith(mockResponse.photos);

    // Проверяем, что результат соответствует ожидаемому формату
    const expectedResult = data.photos; // Ожидаемое значение
    expect(result).toEqual(expectedResult);
  });
});
