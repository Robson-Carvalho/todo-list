import { Section, Header, Div } from './styles'

export const Tasks = () => {

  const isCompleted = {
    color: '#8284FA',
  }

  return (
    <>
      <Section>
        <Header>
          <Div>
            <p>Create tasks</p>
            <span>10</span>
          </Div>
          <Div>
            <p>Completed</p>
            <span>1 of 10</span>
          </Div>
        </Header>
      </Section>
    </>
  )
}
