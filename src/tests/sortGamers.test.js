import sortTopTenGamers from '../helpers/sortTopGamers';

describe('sorts an array of objects and converts score to Number ', () => {
  const apiData = [
    {user:'Maryjane', score:'30'},
    {user:'Daniel', score:'100'},
    {user:'Steve', score:'0'},
    {user:'Shola', score:'300'},
    {user:'Joe', score:'10'},
    {user:'jane', score:'30'},
    {user:'Mary', score:'50'},
    {user:'Dariel', score:'70'},
    {user:'Afole', score:'0'},
    {user:'Kay', score:'80'},
    {user:'Bisi', score:'40'}
  ];
  
  const sortedData =[
  {user:'Shola', score:300},
  {user: "Daniel", score: 100},
  {user: "Kay", score: 80},
  {user: "Dariel", score: 70},
  {user: "Mary", score: 50},
  {user: "Bisi", score: 40},
  {user: "Maryjane", score: 30},
  {user: "jane", score: 30},
  {user: "Joe", score: 10},
  {user: "Steve", score: 0}
]
  const returnValue = sortTopTenGamers(apiData)
  it("returns not return the same array", () => {
    expect(returnValue).not.toEqual(apiData)
  });
  it('should convert the score property to a number',()=>{
    
    expect(typeof returnValue[0].score).not.toBe('string')
    expect(typeof returnValue[0].score).toBe('number');
  })
  it('should return a sorted array of objects in descending order of scores', ()=>{
    expect(returnValue).toStrictEqual(sortedData)
  })
})