import { camalize } from '../../brewerie/etl/utils/camelize'

describe('camelCase a string', ()=>{
  it('should change updated_at to updatedAt', ()=> {
    const snakeCase = 'updated_at'
    const result = camalize(snakeCase)
    expect(result).toEqual('updatedAt')
  })

  it('should change to camelCase', ()=>{
    const snakeCase = 'super_snake_case_Aaa_a'
    const result = camalize(snakeCase)
    expect(result).toEqual('superSnakeCaseAaaA')
  })

})