import HomePage from "../../uiContainers/homePage/HomePage";
import UserPage from "../../uiContainers/usersPage/UserPage";
import MusicsPage from "../../uiContainers/musicsPage/MusicsPage";
import PlayListPage from "../../uiContainers/playListPage/PlayListPage";
import FriendsPage from "../../uiContainers/friendsPage/FriendsPage";
import SearchPage from "../../uiContainers/searchPage/SearchPage";


export const routes = [
    {path: '/', component: <HomePage/>, exact: true},
    {path: '/home', component: <HomePage/>, exact: true},
    {path: '/users', component: <UserPage/>, exact: true},
    {path: '/musics', component: <MusicsPage/>, exact: true},
    {path: '/play_list', component: <PlayListPage/>, exact: true},
    {path: '/friends', component: <FriendsPage/>, exact: true},
    {path: '/search', component: <SearchPage/>, exact: true},
]