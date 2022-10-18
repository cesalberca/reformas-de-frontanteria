import { WordsRepository } from './words-repository'

describe('WordsRepository', () => {
  it('should find all words', async () => {
    const fetcher = jest.fn().mockResolvedValue({ json: () => Promise.resolve(['foo', 'bar', 'baz']) } as Response)
    const wordsRepository = new WordsRepository(fetcher)

    const actual = await wordsRepository.findAll()

    expect(actual).toEqual(['foo', 'bar', 'baz'])
  })
})
