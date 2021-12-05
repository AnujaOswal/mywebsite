import { education } from '../../portfolio'
import './Education.css'

const Education = () => {
  const { school, studyspecialization, yearduration, score } = education
  return (
    <div id='education' style={{ marginTop: '117px' }}>
      <h2 className='section__title' style={{ paddingTop: '0.8em' }}>
        Education
      </h2>
      <p style={{ padding: '0.2em' }}>
        My name is Anuja oswal. I’m a graduate of {yearduration} from {school}
        at Baramati with a degree in {studyspecialization} and scored {score}
        CGPA. I m most passionate about giving back to the community, and my
        goal is to pursue this passion within the field of software engineering.
        In my free time I like working on open source projects.
      </p>
    </div>
  )
}

export default Education
