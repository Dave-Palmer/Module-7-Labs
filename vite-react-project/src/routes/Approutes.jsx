import { Routes, Route } from "react-router-dom"
import LoginComponent from "../components/Login"
import About from "../pages/About"
import Dashboard, { DashboardMessages, DashboardTasks } from "../pages/Dashboard"
import PageNotFound from "../pages/PageNotFound"
import Clock from "../pages/ClockPage"
import MoodPage from "../pages/MoodPage"
import Posts from "../pages/Posts"
import PostsList from "../components/PostsList"
import PostDetails from "../components/PostDetails"
import Students from "../pages/Students"
import StudentList from "../components/StudentList"
import StudentDetails from "../components/StudentDetails"
import SignIn from "../components/SignIn"
import CustomizedDialogs from "../components/CustomDialogBox"
import ImagesPage from "../pages/Images"
import NewStudent from "../components/NewStudent"


//special component containing all the possible routes for this app
//any props passed into AppRoutes will also be passed onto child components using {...props}
function AppRoutes(props) {

    return (

        // see https://reactrouter.com/en/main/components/routes for more info
        <Routes>
            {/* nested routes can be used for URLs like /home/tasks or where the parent component needs to render the children */}
            <Route exact path='/' element={<Dashboard {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>

            <Route path='/Clock' element={<Clock {...props} />} />
            <Route path='/Mood' element={<MoodPage {...props} />} />
            <Route path='/posts' element={<Posts {...props} />}>
                <Route index element={<PostsList />} />
                <Route path=":postId" element={<PostDetails />} />
            </Route>
            <Route path='/students' element={<Students {...props} />}>
                <Route index element={<StudentList />} />
                <Route path=":studentid" element={<StudentDetails />} />
                <Route path="new" element={<NewStudent />} />
            </Route>
            <Route path='/about' element={<About {...props} />} />
            <Route path='/images' element={<ImagesPage {...props} />} />


            {/* <Route path='/login' element={<LoginComponent {...props} />} /> */}
            <Route path='/login' element={<SignIn {...props} />} />

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

//split up the components we have created so far and make different pages for them

export default AppRoutes