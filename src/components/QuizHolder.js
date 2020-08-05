/** @jsx jsx */
import { jsx, Box, Grid, Text, Button, Flex } from 'theme-ui'
import styled from '@emotion/styled'
import { useState } from 'react'

const getRandom = (arr, n) => {
  let result = new Array(n)
  let len = arr.length
  let taken = new Array(len)
  if (n > len) {
    throw new RangeError('getRandom: more elements taken than available')
  }
  while (n--) {
    var x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}

const QuizHolder = props => {
  const options = getRandom(props.legislation, 4)
  const option = options[Math.floor(Math.random() * options.length)]
  const [quizStep, setQuizStep] = useState(1)
  const [completed, setCompleted] = useState(false)

  const updateQuizStep = () => {
    if (quizStep < 5) {
      setQuizStep(quizStep + 1)
    } else {
      setCompleted(true)
      setQuizStep(1)
    }
  }
  return (
    <Box>
      <Quiz
        completed={completed}
        setCompleted={setCompleted}
        updateQuizStep={updateQuizStep}
        options={options}
        option={option}
        quizStep={quizStep}
      />
    </Box>
  )
}

const Quiz = props => {
  let {
    option,
    options,
    completed,
    setCompleted,
    updateQuizStep,
    quizStep
  } = props
  const [answered, setAnswered] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState([])

  const updateAnswers = answer => {
    setAnswered(true)
    if (answer === option.sectionNumber) {
      setQuizAnswers([...quizAnswers, true])
    } else {
      setQuizAnswers([...quizAnswers, false])
    }
  }
  return (
    <Box>
      {completed ? (
        <Box>
          <Text sx={{ fontSize: 7 }}>
            You scored {quizAnswers.filter(a => a).length} / 5
          </Text>
          <Button
            onClick={() => {
              setCompleted(false)
              setQuizAnswers([])
            }}
          >
            Go again
          </Button>
        </Box>
      ) : (
        <Box>
          <Box>
            <Text sx={{ fontSize: 7, fontWeight: 'bold' }}>{quizStep} / 5</Text>
          </Box>
          <Text sx={{ fontSize: 7, fontWeight: 'bold' }}>{option.title}</Text>
          <Grid sx={{ my: 3 }} gap={[3, 4]} columns={[1, 2, 2]}>
            {options.map(o => {
              return (
                <Box>
                  {answered ? (
                    <AnswerBox
                      key={o.sectionNumber}
                      sectionNumber={o.sectionNumber}
                      correctSection={option.sectionNumber}
                    >
                      <QuestionText>s.{o.sectionNumber}</QuestionText>
                    </AnswerBox>
                  ) : (
                    <Box
                      onClick={() => updateAnswers(o.sectionNumber)}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '200px',
                        borderRadius: '10px',
                        bg: 'gray'
                      }}
                      key={o.sectionNumber}
                    >
                      <QuestionText>s.{o.sectionNumber}</QuestionText>
                    </Box>
                  )}
                </Box>
              )
            })}
          </Grid>
          <Flex sx={{ justifyContent: 'flex-end' }}>
            {answered && (
              <Button
                onClick={() => {
                  setAnswered(false)
                  updateQuizStep()
                }}
              >
                NEXT
              </Button>
            )}
          </Flex>
        </Box>
      )}
    </Box>
  )
}

const AnswerBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  borderradius: 10px;

  background-color: ${props =>
    props.sectionNumber === props.correctSection ? '#19a974' : '#ff4136'};
`

const QuestionText = props => (
  <Text sx={{ fontSize: 8, fontWeight: 'bold' }}>{props.children}</Text>
)

export default QuizHolder
