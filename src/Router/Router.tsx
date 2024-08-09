import { Routes, Route } from "react-router-dom";
import MainLayout from "../UI/components/layouts/MainLayout/MainLayout";
import Home from "../UI/pages/Home/Home";
import Profile from "../UI/pages/Profile/Profile";
import NoFabLayout from "../UI/components/layouts/MainLayout/NoFabLayout";
import SettingsPage from "../UI/pages/SettingsPage/SettingsPage";
import BadgesPage from "../UI/pages/BadgesPage/BadgesPage";
import Search from "../UI/pages/Search/Search";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import Notifications from "../UI/pages/Notifications/Notifications";
import AuthCallback from "../utils/auth/AuthCallback";
import { UserAccountInfoProvider } from "../utils/providers/AccountProvider";
import { UserNotificationsProvider } from "../utils/providers/NotificationProvider";
import AuthErrorPage from "../UI/pages/ErrorPages/AuthErrorPage";
import CreatePost from "../UI/pages/CreatePost/CreatePost";
import EditPost from "../UI/pages/EditPost/EditPost";
import PageNotFound from "../UI/pages/ErrorPages/PageNotFoundPage";
import NoAccessPage from "../UI/pages/ErrorPages/NoAccessPage";

export const Router = () => {
    return (
        <UserAccountInfoProvider>
            <UserNotificationsProvider>
                <Routes>
                    <Route path="/" element={<ProtectedRoute><MainLayout component={Home} /></ProtectedRoute>} />
                    <Route path="/search" element={<ProtectedRoute><MainLayout component={Search} /></ProtectedRoute>} />
                    <Route path="/notifications" element={<ProtectedRoute><MainLayout component={Notifications} /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><MainLayout component={Profile} /></ProtectedRoute>} />
                    <Route path="/profile/badges" element={<ProtectedRoute><MainLayout component={BadgesPage} /></ProtectedRoute>} />
                    <Route path="/settings" element={<ProtectedRoute><NoFabLayout component={SettingsPage} /></ProtectedRoute>} />
                    <Route path="/post/*" element={<ProtectedRoute><NoFabLayout component={CreatePost} /></ProtectedRoute>} />
                    <Route path="/edit-post" element={<ProtectedRoute><NoFabLayout component={EditPost} /></ProtectedRoute>} />
                    <Route path="/auth_callback" element={<AuthCallback />} />
                    <Route path="/error" element={<AuthErrorPage/>} />
                    <Route path="/no-access" element={<NoAccessPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </UserNotificationsProvider>
        </UserAccountInfoProvider>
    )
}

export default Router