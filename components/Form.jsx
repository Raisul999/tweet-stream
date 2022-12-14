import { useState } from 'react'
import style from "./Form.module.css"
import axios from 'axios'
import { Button } from "@mui/material"


const Form = () => {
    const [channel, setChannel] = useState('');
    const [keyword, setKeyword] = useState('');

    const registerDetails = () => {
        // console.log(channel.length)
        // Validations
        if (channel === '') {

            alert("Please enter channel name")
            return
        } else if (channel.length == 2) {
            alert('Channel name must be at least 3 characters')
            return
        } else if (keyword === '') {
            alert("Please enter keyword")
            return
        }

       // API request

        axios.post('api/registerRule', {
            channel: channel,
            keyword: keyword,

        })
            .then((res) =>{
                alert(res.data.message)
            })
            .catch((error) => {
                alert("Duplicate Rule")
            })

    }



    return (
        <div>

            <div className={style.container}>
                <div className={style.form}>
                    <h1 className={style.heading}>Add Channel</h1>
                    <div className={style.items}>

                        <div> <label>Channel Name</label></div>
                        <input
                            type="text"
                            className={style.input}
                            min={3}
                            value={channel}
                            onChange={(e) => setChannel(e.target.value)}
                        />

                        <div> <label>Keyword</label></div>
                        <input
                            type="text"
                            className={style.input}
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />

                        <Button
                            variant='contained'
                            color='primary'
                            onClick={registerDetails}
                        >
                            Send
                        </Button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Form
