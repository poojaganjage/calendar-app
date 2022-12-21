import {
  Inject, 
  ScheduleComponent, 
  Day, 
  Week, 
  WorkWeek, 
  Month, 
  Agenda, 
  ViewsDirective, 
  ViewDirective, 
  TimelineViews, 
  TimelineMonth, 
  DragAndDrop, 
  Resize 
} from '@syncfusion/ej2-react-schedule';
import {TreeViewComponent} from '@syncfusion/ej2-react-navigations';
import './App.css';

function App() {
  const EventSettingsModel = [
    {
      Id: 1,
      Subject: 'Examination',
      StartTime: new Date(2022, 11, 22, 10, 0),
      EndTime: new Date(2022, 11, 22, 5, 30),
      IsAllDay: true,
      Status: 'Completed',
      Priority: 'High',
      RecurrenceRule: 'FREQ=WEEKLY; INTERVAL=1; COUNT=10',
      IsReadonly: true,
      IsBlock: true
    },
    {
      Id: 2,
      Subject: 'Meeting',
      StartTime: new Date(2022, 11, 21, 10, 0),
      EndTime: new Date(2022, 11, 21, 5, 30),
      IsAllDay: false,
      Status: 'Completed',
      Priority: 'High'
    },
    {
      Id: 3,
      Subject: 'Meditation',
      StartTime: new Date(2022, 11, 23, 6, 0),
      EndTime: new Date(2022, 11, 23, 7, 0),
      Location: 'Yoga Center'
    }
  ];

  const treeViewData = [
    {
      id: 1,
      Name: 'James'
    },
    {
      id: 2,
      Name: 'Jessy'
    },
    {
      id: 3,
      Name: 'Daisy'
    },
    {
      id: 4,
      Name: 'Louis'
    }
  ];
  return (
    <div>
      <div className='sch-title'>Doctor Appointment</div>
      <div className='sch-component'>
        <ScheduleComponent currentView='Month' eventSettings={{dataSource: EventSettingsModel}} selectedDate={new Date(2022, 11, 21)} allowDragAndDrop={false}>
          <ViewsDirective>
            <ViewDirective option='Day' startHour='03:00' endHour='18:00' interval={3} displayName='3 Days Only'></ViewDirective>
            <ViewDirective option='Week' interval={2} displayName='2 Weeks Only'></ViewDirective>
            <ViewDirective option='Month' showWeekNumber={true} showWeekend={false}></ViewDirective>
            <ViewDirective option='TimelineDay' isSelected={true}></ViewDirective>
            <ViewDirective option='TimelineMonth'></ViewDirective>
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, DragAndDrop, Resize]} />
        </ScheduleComponent>
      </div>
      <div className='tree-title'>Patient List</div>
      <div className='tree-component'>
        <TreeViewComponent fields={{dataSource: treeViewData, id: 'id', text: 'Name'}} />
      </div>
    </div>
  );
}
export default App;
