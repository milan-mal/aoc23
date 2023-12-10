import Day01 from './Day01.jsx'

function CurrentDay() {
  const components = {
    Day01: Day01,
  }

  const TagName = components[`Day0${1}`]

  return <TagName />
}

export default CurrentDay