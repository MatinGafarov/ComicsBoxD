// React Router
import {
    Route,
    Routes,
    BrowserRouter,
} from "react-router"

// Pages
import { HomePage } from "@/pages/Home/HomePage"
import { ComicsPage } from "@/pages/Comics/ComicsPage"
import { LoginPage } from "@/pages/Login/LoginPage"
import { SearchPage } from "@/pages/Search/SearchPage"
import { ProfilePage } from "@/pages/Profile/ProfilePage"
import { ActivityPage } from "@/pages/Activity/ActivityPage"
import { ReviewOrLogPage } from "@/pages/ReviewOrLog/ReviewOrLogPage"
import { NewsPage } from "@/pages/News/NewsPage"
import { ComicDetailPage } from "@/pages/Comics/ComicDetailPage"
import { ProfileEditPage } from "@/pages/Profile/ProfileEditPage"

// Layouts
import { MainLayout } from "@/components/layouts/MainLayout/MainLayout"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/comics" element={<ComicsPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/activity" element={<ActivityPage />} />
                    <Route path="/revieworlog" element={<ReviewOrLogPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/news/:newsId" element={<NewsPage />} />
                    <Route path="/comic/:id" element={<ComicDetailPage />} />
                    <Route path="/profile-edit" element={<ProfileEditPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}