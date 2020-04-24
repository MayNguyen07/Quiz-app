import React from 'react'
import { useForm } from 'react-hook-form'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { history } from './../../store'
import { Link } from 'react-router-dom'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

function Home(props) {
  const { onSubmit } = props
  const { register, handleSubmit, errors } = useForm()

  const onFormSubmit = data => {
    onSubmit(data.fullName)
    history.push('/question')
  }

  return (
    <div>
      <h1> Welcome to Reactjs Quiz App</h1>
      <form onSubmit={handleSubmit(onFormSubmit)} className="form-style">
        <input
          type="text"
          placeholder=" Enter your Full Name"
          name="fullName"
          ref={register({
            required: 'Full name is required',
            minLength: {
              value: 5,
              message: 'Full Name is required at least 5 characters '
            }
          })}
        />
        {errors.fullName && (
          <p className="warning-text">{errors.fullName.message}</p>
        )}
        <button type="submit">Start</button>
      </form>
    </div>
  )
}
export default Home

{
  /* 
  const Home = props => (
  <div>
    <h1>Home</h1>
   <p>Count: {props.count}</p>
  <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p> 
  </div>
)*/
}

// const mapStateToProps = ({ counter }) => ({
//   count: counter.count,
//   isIncrementing: counter.isIncrementing,
//   isDecrementing: counter.isDecrementing
// })

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       increment,
//       incrementAsync,
//       decrement,
//       decrementAsync,
//       changePage: () => push('/about-us')
//     },
//     dispatch
//   )

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home)
// export default Home;
