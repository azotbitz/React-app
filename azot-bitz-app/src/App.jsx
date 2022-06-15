import './App.css';
import {useEffect, useRef, useState} from "react";
import {FormGroup, makeStyles, useTheme} from "@material-ui/core";
import {Button, Container, CssBaseline} from "@material-ui/core";
import NestedList from "./ChatList";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MessageList from "./MessageList";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const useStyles = makeStyles({
    text: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'center',
    },
    form: {
        width: 200 + 'px',
        alignItems: 'center',
    }})

function SomeNestedChild() {

    const styles = useStyles();
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [changer, setChanger] = useState(false);
    const ref = useRef('');
    const ref2 = useRef('');
    const [messageList2, setMessageList2] = useState([]);
    const [chatArray, setChatArray] = useState([]);
    const theme = useTheme();

    useEffect(() => {
        ref.current.focus();
        setChatArray(prevState => [...prevState, {id: giveId(prevState), name: author}]);
            if(changer) {
                setTimeout( () => robotTell(author), 1000)
                setChanger(!changer);
                setText('')
                setAuthor('')
            }
            }, [messageList2]
    );


    function handleClick(e) {
        e.preventDefault()
        setMessageList2(prevState => [...prevState, {id: giveId(prevState), text, author}])
        setChanger(!changer)
    }

    function giveId (arr) {
        return arr.length ? arr[arr.length - 1].id + 1 : 0;
    }

    function robotTell (writer) {
        const robotText = `Message send`
        setMessageList2(prevState => [...prevState, {id: giveId(prevState), text: robotText, author: writer}])
    }

    return (
        <div>
                <CssBaseline />
                <Container fixed >
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Item>
            <NestedList chatArray = {chatArray}/>
                        </Item>
                        <Item>
           <MessageList messageList2 = {messageList2} />
                        </Item>
            <Item>
            <FormGroup className={styles.form} action=''>
                <h4 className={styles.text}>TEXT</h4>
            <input type="text" className='input' ref={ref} value={text} onChange={(e) => setText(e.target.value)}/>
                <h4 className={styles.text}>AUTHOR</h4>
                <input type="text" className='input' ref={ref2} value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <h4 className={styles.text}>SEND MESSAGE</h4>
                <Button variant="contained" onClick={handleClick}>+</Button>
            </FormGroup>
    </Item>
                    </Stack>
                </Container>
        </div>
    )
}

export default SomeNestedChild;
