import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export interface IListNav {
  id: number,
  icon: any,
  label: string,
  route: string,
}

export const listNav: IListNav[] = [
  {
    id: 0,
    icon: <WidgetsIcon />,
    label: 'Widgets',
    route: 'widgets',
  },
  {
    id: 1,
    icon: <SplitscreenIcon />,
    label: 'To-Do',
    route: 'to-do',
  },
  {
    id: 2,
    icon: <ViewKanbanIcon />,
    label: 'Kanban',
    route: 'kanban',
  },
  {
    id: 3,
    icon: <CalendarTodayIcon />,
    label: 'Calendar',
    route: 'calendar',
  },
]