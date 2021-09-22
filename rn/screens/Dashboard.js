

import React, { useEffect } from 'react';
import resturls from '../globals/Apiurls';
import GlobalService from '../globals/GlobalService';
import { DataTable } from 'react-native-paper';
import { Container, ContainerScroll, Title } from '../stylesComponents/Login';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUrlList, updateUrlList } from '../redux/action';

function Dashboard() {

    const dispatch = useDispatch();
    useEffect(() => {
        const loadData = async () => {
            try {
                await dispatch(fetchUrlList());
            } catch (err) {
                console.log(err, 'Error in dispatching fetchUrlList')
            }
        };
        loadData();
    }, []);


    fetchAllUrls = () => {
        GlobalService.generalSelect(
            async (respdata) => {
                updateUrlList(respdata.urlList)
                handleLoadingChange(false)
            },
            resturls.fetchAllUrl,
            {},
            'GET',
        );
    }

    const urlList = useSelector(state => state.urlList);
    const loading = useSelector(state => state.loading);

    return (

        <Container>
            <ContainerScroll
                keyboardShouldPersistTaps="handled" >
                {loading ? <Title>Loading...</Title> :
                    <>
                        <Title>URL List</Title>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Original URL</DataTable.Title>
                                <DataTable.Title>Tiny Url</DataTable.Title>
                            </DataTable.Header>
                            {urlList.length ? urlList.map(data => {
                                return (
                                    <DataTable.Row key={data.tinyUrl}>
                                        <DataTable.Cell>{data.originalUrl}</DataTable.Cell>
                                        <DataTable.Cell>{data.tinyUrl}</DataTable.Cell>
                                    </DataTable.Row>
                                )
                            }) : null}
                        </DataTable>
                    </>}
            </ContainerScroll>
        </Container>
    );
}

export default Dashboard;
