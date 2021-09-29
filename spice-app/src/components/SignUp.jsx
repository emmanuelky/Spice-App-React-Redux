import React from 'react'
import { Formik, Field, Form } from 'formik';
import { addUser } from '../redux/actions'
import { useSelector, useDispatch, } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'





const SignUp = () => {


    const dispatch = useDispatch()


    const ID = uuidv4()
    const currentDate = format(new Date(), 'yyyy-MMM-do HH:mm b')
    // console.log(currentDate)



    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    username: '',
                    password: '',
                    image: '',
                    bio: '',
                    city: '',



                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    dispatch(addUser(values, {
                        id: ID, createdAt: currentDate,
                        updatedAt: currentDate,
                        followers: [],
                        following: [],
                    }))
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Emmanuel" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Iyere" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="iyere@gmail.com"
                        type="email"
                    />
                    <label htmlFor="firstName">User Name</label>
                    <Field id="UserName" name="username" placeholder="emmmali" />

                    <label htmlFor="password">password</label>
                    <Field type='password' id="password" name="password" placeholder="enter your password" />

                    <label htmlFor="photo">Photo Url</label>
                    <Field id="photo" name="image" placeholder="image url" />
                    <label htmlFor="bio">Bio</label>
                    <Field id="bio" name="bio" placeholder="about you..." />

                    <label htmlFor="city">City</label>
                    <Field id="city" name="city" placeholder="Berlin" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default SignUp
