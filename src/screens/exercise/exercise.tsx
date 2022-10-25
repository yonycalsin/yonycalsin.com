import * as React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { RuntsPlayground } from '@runts/react'

import { Header } from 'layouts'

function ExerciseScreen() {
  return (
    <>
      <Header container="6xl" />
      <Container maxW="6xl" my="6">
        <Box overflow="hidden" borderRadius="lg">
          <RuntsPlayground
            files={{
              '/main.ts': `export function twoSum(nums: number[], target: number): number[] {
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
              '/main.test.ts': `import { twoSum } from './main'

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
})
`,
            }}
            activeFile="/main.ts"
            theme="vitesse-dark"
          />
        </Box>
      </Container>
    </>
  )
}

export default ExerciseScreen
