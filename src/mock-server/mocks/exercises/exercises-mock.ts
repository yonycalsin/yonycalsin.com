import nextBase64 from 'next-base64'

import type { ExerciseResponsePayload, ServerListResponse } from 'typings/services'
import { buildMdxRuntimeCode } from 'utils'

const allExercisesSuccess: ServerListResponse<ExerciseResponsePayload> = {
  error: null,
  data: {
    results: [
      {
        id: 'e1',
        name: 'Two Sum',
        slug: 'two-sum',
        status: 'solved',
        difficulty: 'easy',
        test: {
          type: 'string',
          code: `import { twoSum } from './main'
    
            describe('main', ()=> {
                it('case 1', ()=> {
                    const result = twoSum([2, 7, 11, 15], 9)
                    
                    expect(result).toStrictEqual([0,1])
                })
            
                it('case 2', ()=> {
                    const result = twoSum([3, 2, 4], 6)
                    
                    expect(result).toStrictEqual([1,2])
                })
            
                it('case 3', ()=> {
                    const result = twoSum([3, 3], 6)
            
                    expect(result).toStrictEqual([0,1])
                })
            })`,
        },
        solutions: [
          {
            lang: 'typescript',
            body: {
              type: 'string',
              code: `export function twoSum(nums: number[], target: number): number[] {
                    const map = new Map<number, number>()
                
                    for (let i = 0; i < nums.length; i++) {
                        const num = nums[i]
                
                        const complement = target - num
                
                        if (map.has(complement)) {
                        return [map.get(complement), i]
                        }
                
                        map.set(num, i)
                    }
                
                    throw new Error('No two sum solution')
                };`,
            },
            solvedAt: '2022-10-25T02:54:28.387Z',
          },
        ],
        body: {
          type: 'mdx',
          code: nextBase64.encode(
            encodeURIComponent(
              encodeURIComponent(
                buildMdxRuntimeCode(`jsx('div', {
                    children: \`
                    Given an array of integers **nums** and an integer **target**, return _indices of the two numbers such that they add up to **target**_.
    
                    You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.
                    
                    You can return the answer in any order.
                    
                    **Example 1:**
                    
                    **Input:** nums = \[2,7,11,15\], target = 9
                    **Output:** \[0,1\]
                    **Explanation:** Because nums\[0\] + nums\[1\] == 9, we return \[0, 1\].
                    
                    **Example 2:**
                    
                    **Input:** nums = \[3,2,4\], target = 6
                    **Output:** \[1,2\]
                    
                    **Example 3:**
                    
                    **Input:** nums = \[3,3\], target = 6
                    **Output:** \[0,1\]
                    
                    **Constraints:**
                    
                    - **2 <= nums.length <= 104**
                    - **-109 <= nums[i] <= 109**
                    - **-109 <= target <= 109**
                    - **Only one valid answer exists.**
                    
                    **Follow-up:** Can you come up with an algorithm that is less than **O(n2)** time complexity?
                    \`
                  })`),
              ),
            ),
          ),
        },
        createdAt: '2022-10-25T02:54:51.882Z',
        updatedAt: '2022-08-25T02:54:56.890Z',
      },
    ],
    meta: {
      hasNextPage: false,
      hasPrevPage: false,
      page: 1,
      pages: 1,
      total: 1,
    },
  },
}

export { allExercisesSuccess }
