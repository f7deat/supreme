import { request } from 'umi';
import type { NoticeType, AnalysisData } from './data';

export async function queryProjectNotice(): Promise<{ data: NoticeType[] }> {
  return request('/api/project/notice');
}

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('/api/fake_workplace_chart_data');
}

export async function getUserPostCounnt(id: string) {
  return request(`/post/get-count-in-user/${id}`);
}
