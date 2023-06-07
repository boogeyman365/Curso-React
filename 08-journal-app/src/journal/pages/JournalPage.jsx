import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { startNewNote } from "../../store/journal"

export const JournalPage = () => {
  

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() );

  }


  return (
    <JournalLayout>

      {/* <Typography>Magna nulla officia consectetur fugiat. Aute labore ad in duis eiusmod. Ipsum tempor in ad consequat pariatur culpa reprehenderit tempor id minim elit dolor cupidatat consectetur. Est esse ullamco nisi amet excepteur ullamco velit aliquip deserunt commodo velit dolore sunt non.</Typography> */}

      <NothingSelectedView />

      {/* <NoteView /> */}

      <IconButton
        onClick={ onClickNewNote }
        size="large"
        sx={{ 
            color: 'white', 
            backgroundColor: 'error.main', 
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}>
            <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
