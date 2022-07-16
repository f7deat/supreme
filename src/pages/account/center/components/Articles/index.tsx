import React from 'react';
import { queryPostByUser } from '@/services/defzone/post';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import moment from 'moment';
import { FormattedMessage } from 'umi';

export type UserArticleProps = {
  userId: string;
}

const Articles: React.FC<UserArticleProps> = (props) => {

  const columns: ProColumns<API.PostListItem>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Modified',
      render: (_, record) => moment(record.modifiedDate).format('DD/MM/YYYY hh:mm:ss'),
      search: false,
    },
    {
      title: 'View',
      render: (_, record) => record.view.toLocaleString(),
      search: false,
    },
    {
      title: <FormattedMessage id="global.status" defaultMessage="Status" />,
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: 'Draft',
          status: 'Default',
        },
        1: {
          text: 'Active',
          status: 'Processing',
        },
      },
    }
  ]

  return (
    <ProTable
      rowKey="id"
      request={(params) => queryPostByUser({
        userId: props.userId,
        type: 0,
        ...params
      })}
      pagination={{
        pageSize: 5
      }}
      search={{
        layout: 'vertical',
      }}
      columns={columns}
    />
  );
};

export default Articles;
