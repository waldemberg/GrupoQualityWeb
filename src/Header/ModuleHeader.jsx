import LogoGQ from "./LogoGQ";
import ListNav from "./ListNav";
import UserCard from "./UserCard"

function ModuleHeader () {
    return(
        <header className="flex items-center justify-around w-full p-4 shadow-lg">
            <LogoGQ />
            <ListNav />
            <UserCard />
        </header>
    )
}

export default ModuleHeader;