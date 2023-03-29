import { useEffect, useState } from 'react';
import React from 'react'
import Table from "../component/Table";
import { TabView, TabPanel } from 'primereact/tabview';
import axios from "axios";

function TableOne() {

    const [tabOnePosts, setTabOnePosts] = useState([])
    const [tabTwoPost, setTabTwoPost] = useState([])

    const fetchUser = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) =>
            setTabTwoPost(res.data));

    }

    useEffect(() => {
        fetchUser()
    },[]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                setTabOnePosts(res.data)
            });
    }, []);

    const tableOneColumns = [
        { field: `id`, header: 'ID', filterMatchMode: 'equals' },
        { field: 'userId', header: 'UserId', },
        { field: 'title', header: 'Title', },
        { field: 'completed', header: 'Status', },
    ]


    const tableTwoColumns = [
        { field: `id`, header: 'ID', sortable: true, filterMatchMode: 'equals' },
        { field: 'name', header: 'Name', sortable: true, },
        { field: 'username', header: 'Username', sortable: true, },
        { field: 'email', header: 'Email', sortable: true, },
        { field: 'address.street', header: 'Street', sortable: true, },
        { field: 'address.zipcode', header: 'zipcode', sortable: true, },

    ]



    return (
        <div className='p-4 '>
            <TabView className='p-4 bg-white border-round'>

                <TabPanel header="Todos" >
                    <Table columns={tableOneColumns}
                        pagination={true}
                        posts={tabOnePosts}
                        filter={true} />
                </TabPanel>

                <TabPanel header="Users">
                    <Table columns={tableTwoColumns}
                        posts={tabTwoPost}
                        refresh={true}
                        fetchUser={fetchUser}
                        />
                        
                </TabPanel>

            </TabView>
        </div>
    )
}

export default TableOne