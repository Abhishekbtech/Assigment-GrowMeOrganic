import React, { useState, useEffect } from 'react';
import { Checkbox, Collapse, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import departmentsData from './departments.json';

interface Department {
    department: string;
    sub_departments?: Department[];
}

const DepartmentList: React.FC = () => {
    const [open, setOpen] = useState<{ [key: string]: boolean }>({});
    const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const updateParentSelection = (departments: Department[], parentName: string = '') => {
            departments.forEach(department => {
                const fullName = parentName ? `${parentName} > ${department.department}` : department.department;
                if (department.sub_departments) {
                    updateParentSelection(department.sub_departments, fullName);
                    const allSelected = department.sub_departments.every(subDept => selected[`${fullName} > ${subDept.department}`]);
                    setSelected(prev => ({ ...prev, [fullName]: allSelected }));
                }
            });
        };
        updateParentSelection(departmentsData);
    }, [selected]);

    const handleToggle = (name: string) => {
        setOpen(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const handleSelect = (name: string, isParent: boolean = true) => {
        setSelected(prev => {
            const newState = { ...prev, [name]: !prev[name] };
            if (isParent) {
                const toggleChildren = (departments: Department[], parentName: string) => {
                    departments.forEach(department => {
                        const fullName = `${parentName} > ${department.department}`;
                        newState[fullName] = newState[name];
                        if (department.sub_departments) {
                            toggleChildren(department.sub_departments, fullName);
                        }
                    });
                };
                toggleChildren(departmentsData, name);
            }
            return newState;
        });
    };

    const renderList = (departments: Department[], parentName: string = ''): React.ReactNode => {
        return (
            <List component="div" disablePadding>
                {departments.map(department => {
                    const fullName = parentName ? `${parentName} > ${department.department}` : department.department;
                    const hasSubDepartments = !!department.sub_departments;

                    return (
                        <div key={fullName}>
                            <ListItem button onClick={() => handleToggle(fullName)}>
                                <ListItemIcon>
                                    <Checkbox
                                        checked={!!selected[fullName]}
                                        onMouseDown={(e) => {
                                            e.stopPropagation();
                                            handleSelect(fullName, !parentName);
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={department.department} />
                                {hasSubDepartments && (open[fullName] ? <ExpandLess /> : <ExpandMore />)}
                            </ListItem>
                            {hasSubDepartments && (
                                <Collapse in={open[fullName]} timeout="auto" unmountOnExit>
                                    <div style={{ marginLeft: 20 }}>
                                        {renderList(department.sub_departments!, fullName)}
                                    </div>
                                </Collapse>
                            )}
                        </div>
                    );
                })}
            </List>
        );
    };

    return <div style={{ marginBottom: 100 }}>{renderList(departmentsData)}</div>;
};

export default DepartmentList;