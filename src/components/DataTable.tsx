import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const DataTable: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setPosts(response.data));
    }, []);

    const columns: GridColDef[] = [
        { field: 'userId', headerName: 'User ID', width: isSmallScreen ? 70 : isMediumScreen ? 100 : 150 },
        { field: 'id', headerName: 'ID', width: isSmallScreen ? 70 : isMediumScreen ? 100 : 150 },
        { field: 'title', headerName: 'Title', flex: 1, minWidth: isSmallScreen ? 150 : 200 },
        { field: 'body', headerName: 'Body', flex: 2, minWidth: isSmallScreen ? 200 : 300 },
    ];

    return (
        <div style={{ height: '100%', width: '100%', padding: '10px', boxSizing: 'border-box' }}>
            <DataGrid 
                rows={posts} 
                columns={columns} 
                autoHeight
                disableColumnMenu 
                disableRowSelectionOnClick 
            />
        </div>
    );
};

export default DataTable;