import { Modal } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { API_BASE_URL, CATEGORIES_API, LOGIN_API } from '../../../../constants/api';
import { CATEGORY_TYPE, SORT } from '../../../../constants/constants';
import { axiosClient } from '../../../../hooks/useHttp';
import Category from './Category';

const CategoryContainer = () => {
    //define state
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSort, setCurrentSort] = useState("");
    const [currentDirection, setCurrentDirection] = useState("");
    const [searchField, setSearchField] = useState({});

    //define header table
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Chinese Score',
            dataIndex: 'chinese',
            sorter: true,
        },
        {
            title: 'Math Score',
            dataIndex: 'math',
            sorter: true,
        },
        {
            title: 'English Score',
            dataIndex: 'english',
            sorter: true,
        },
    ];

    // get categories
    const getCategories = useCallback(async () => {
        const paramater = {
            searchField: searchField,
            pageSize: pageSize,
            currentPage: currentPage,
            currentSort: currentSort,
            currentDirection: currentDirection,
            type: CATEGORY_TYPE.PRODUCT,
        }
        await axiosClient.get(API_BASE_URL + CATEGORIES_API.LIST, paramater)
            .then((res) => {
                setData(res.data);
            }).catch(() => {
                Modal.error({
                    content: "Get data error, Please check again!"
                });
            })
    }, [pageSize, currentPage, currentSort, currentDirection]);

    const onChange = (pagination, filters, sorter, extra) => {
        setCurrentPage(pagination.current);
        setCurrentSort(sorter.columnKey);
        setCurrentDirection(sorter.order ? (sorter.order === "descend" ? SORT.DESC : SORT.ASC) : "");
    };

    useEffect(() => {
        getCategories()
    }, [pageSize, currentPage, currentSort, currentDirection]);

    return (
        <Category
            columns={columns}
            data={data}
            onChange={onChange}
            currentPage={currentPage}
            currentSort={currentSort}
            currentDirection={currentDirection}
            pageSize={pageSize}
            setPageSize={setPageSize}
        />
    );
};

export default CategoryContainer;