// React Router
import {
    Route,
    Routes,
    BrowserRouter,
} from "react-router"

// Pages
import { HomePage } from "@/pages/Home/HomePage"
import { LoginPage } from "@/pages/Login/LoginPage"
import { SearchPage } from "@/pages/Search/SearchPage"
import { ProfilePage } from "@/pages/Profile/ProfilePage"
import { ActivityPage } from "@/pages/Activity/ActivityPage"
import { ReviewOrLogPage } from "@/pages/ReviewOrLog/ReviewOrLogPage"

// Layouts
import { MainLayout } from "@/components/layouts/MainLayout/MainLayout"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/activity" element={<ActivityPage />} />
                    <Route path="/revieworlog" element={<ReviewOrLogPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}