import React from 'react'
import { Formik, Field, Form } from 'formik';
import { addUser, currentUser } from '../../redux/actions'
import { useSelector, useDispatch, } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'
import { Button } from 'react-bootstrap'
import { AiOutlineDingding } from "react-icons/ai";
import { Link } from 'react-router-dom'





const SignUp = ({ history }) => {


    const dispatch = useDispatch()


    const ID = uuidv4()
    const currentDate = format(new Date(), 'yyyy-MMM-do HH:mm b')




    return (
        <div className=' flex flex-col align-items-center py-5 bg-red-300'>
            <div className="mb-10 mt-5 text-light align-self-center text-3xl border-t-2 border-b-2 border-dashed p-2">
                <h1 className="flex text-7xl"> SpIcE <AiOutlineDingding className=" text-blue-700 " /></h1>

            </div>
            <h1 className='text-blue-700'>Sign Up</h1>
            <Formik
                initialValues={{
                    id: ID,
                    firstName: '',
                    lastName: '',
                    email: '',
                    username: '',
                    password: '',
                    image: '',
                    bio: '',
                    city: '',
                    createdAt: currentDate,
                    updatedAt: currentDate,
                    followers: [],
                    following: [],
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    dispatch(addUser(values))
                    dispatch(currentUser(values))
                    history.push('/')
                }}

            >
                <Form className='flex flex-col  '>
                    <div className='my-2 '>

                        <Field id="firstName" name="firstName" placeholder="first name" />

                    </div>
                    <div className='my-2'>
                        <Field id="lastName" name="lastName" placeholder="last name" />
                    </div>
                    <div className='my-2'>
                        <Field
                            id="email"
                            name="email"
                            placeholder="email"
                            type="email"
                        />
                    </div>
                    <div className='my-2'>
                        <Field id="UserName" name="username" placeholder="username" />
                    </div>
                    <div className='my-2'>
                        <Field type='password' id="password" name="password" placeholder="password" />
                    </div>
                    <div className='my-2'>
                        <Field id="photo" name="image" placeholder="image url" />
                    </div>
                    <div className='my-2'>
                        <Field id="bio" name="bio" placeholder="about you..." />
                    </div>
                    <div className='my-2'>
                        <Field id="city" name="city" placeholder="city" />
                    </div>
                    <Button type="submit" className=''>Sign up</Button>
                </Form>
            </Formik>

            <span className="mx-3 my-10 ">You already have an account?
                <Link to="/login">Login</Link> </span>
        </div>
    )
}

export default SignUp