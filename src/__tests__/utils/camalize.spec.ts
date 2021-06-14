import { camalize } from '../../brewerie/etl/utils/camelize'

describe('camelCase a string', ()=>{
  it('should change updated_at to updatedAt', ()=> {
    let snake_case = 'updated_at'
    let result = camalize(snake_case)
    expect(result).toEqual('updatedAt')
  })

  it('should change to camelCase', ()=>{
    let snake_case = 'super_snake_case_Aaa_a'
    let result = camalize(snake_case)
    expect(result).toEqual('superSnakeCaseAaaA')
  })

})