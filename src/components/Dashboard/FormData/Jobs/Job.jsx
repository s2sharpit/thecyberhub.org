import React, { useEffect } from "react";
import { JobContainer, JobHero, JobLocation, JobRole, JobRoleTitle, JobTitle } from "./JobsElements";
import { Detail2 } from "./JobDetailsElements";
import { Button, ButtonGreen } from "../CheckValuesElements";

export default function Job(props) {
    const [values, setValues] = React.useState({
        id: props.id,
        checked: false,
        accepted: false,
        hired: false,
        rejected: false,
        resumePending: false,
        rejectedReason: "",
    });
    useEffect(() => {
        setValues({
            id: props.id,
            checked: props.checked,
            accepted: props.accepted,
            hired: props.hired,
            rejected: props.rejected,
            resumePending: props.rejected,
            rejectedReason: props.rejectedReason,
        });
    }, [props.id]);
    return (
        <JobContainer onClick={props?.onClick}>
            {values ? null : null}
            <JobHero>
                {props?.reason === "other" && <JobTitle>{props?.contextHeading}</JobTitle>}
                {props?.reason === "feedback" && <JobTitle>{props?.contextHeading}</JobTitle>}
                <JobTitle>{props?.reasonType}</JobTitle>
            </JobHero>
            <JobRole>
                <JobRoleTitle>{props.name}</JobRoleTitle>
            </JobRole>
            <JobLocation>
                <span>{props.reasonType}</span>
            </JobLocation>
            <JobLocation>
                <span>{props.createdAt.split("T")[0]}</span>
                <span> | </span>
                <span>{props.createdAt.split("T")[1]}</span>
            </JobLocation>
            <Detail2>
                {!props.checked ? <Button> Checked </Button> : <ButtonGreen> Checked </ButtonGreen>}
                {!props.accepted ? <Button> Accepted </Button> : <ButtonGreen> Accepted </ButtonGreen>}
                {!props.hired ? <Button> Hired </Button> : <ButtonGreen> Hired </ButtonGreen>}
                {!props.resumePending ? <Button> Resume </Button> : <ButtonGreen> Resume </ButtonGreen>}
                {!props.rejected ? <Button> Rejected </Button> : <ButtonGreen> Rejected </ButtonGreen>}{" "}
            </Detail2>
        </JobContainer>
    );
}
