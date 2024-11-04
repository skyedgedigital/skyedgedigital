import React from 'react';

const Project = ({ params }: { params: { projectId: string } }) => {
  return <div>Project {params.projectId}</div>;
};

export default Project;
