import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CalendarMonth, Today } from '@mui/icons-material'

export default function BottomNav() {
    const [value, setValue] = React.useState("");
    // const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <BottomNavigation
            sx={{ width: "100%"}}
            value={value}
            onChange={handleChange}
        >
            <BottomNavigationAction
                label="incoming"
                value="todo"
                icon={<RestoreIcon />}
            />
            <BottomNavigationAction
                label="Today"
                value="today"
                icon={<Today />}
            />
            <BottomNavigationAction
                label="Calendar"
                value="calendar"
                icon={<CalendarMonth />}
            />
        </BottomNavigation>
    )
}