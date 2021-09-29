import React from 'react'
import { Formik, Field, Form } from 'formik';
import { addUser } from '../redux/actions'
import { useSelector, useDispatch, } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'
import { Button } from 'react-bootstrap'
import { AiOutlineDingding } from "react-icons/ai";
import { Link } from 'react-router-dom'







const SignUp = () => {


    const dispatch = useDispatch()


    const ID = uuidv4()
    const currentDate = format(new Date(), 'yyyy-MMM-do HH:mm b')
    // console.log(currentDate)



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
                    dispatch(addUser(values, {
                        followers: [],
                        following: []
                    }))
                }}

            >
                <Form className='flex flex-col  '>
                    <div className='my-2 '>

                        {/* <label htmlFor="firstName">First Name</label> */}
                        <Field id="firstName" name="firstName" placeholder="first name" />

                    </div>
                    <div className='my-2'>

                        {/* <label htmlFor="lastName">Last Name</label> */}
                        <Field id="lastName" name="lastName" placeholder="last name" />
                    </div>
                    <div className='my-2'>

                        {/* <label htmlFor="email">Email</label>  */}
                        <Field
                            id="email"
                            name="email"
                            placeholder="iyere@gmail.com"
                            type="email"
                        />
                    </div>
                    <div className='my-2'>


                        {/* <label htmlFor="firstName">User Name</label> */}
                        <Field id="UserName" name="username" placeholder="username" />
                    </div>
                    <div className='my-2'>


                        {/* <label htmlFor="password">password</label> */}
                        <Field type='password' id="password" name="password" placeholder="password" />
                    </div>
                    <div className='my-2'>



                        {/* <label htmlFor="photo">Photo Url</label> */}
                        <Field id="photo" name="image" placeholder="image url" />
                    </div>
                    <div className='my-2'>


                        {/* <label htmlFor="bio">Bio</label> */}
                        <Field id="bio" name="bio" placeholder="about you..." />
                    </div>
                    <div className='my-2'>



                        {/* <label htmlFor="city">City</label> */}
                        <Field id="city" name="city" placeholder="city" />
                    </div>
                    <Button type="submit">Submit</Button>
                </Form>
            </Formik>

            <span className="my-10 ">You already have an account?
                <Link to="/login">Login</Link> </span>
        </div>
    )
}

export default SignUp
