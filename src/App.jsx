import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Issues from './pages/issues'
import AllIssues from './pages/issues_all'
import SavedView1 from './pages/issues_saved1'
import SavedView2 from './pages/issues_saved2'

import Services from './pages/services'
import AppServices from './pages/services_app'
import ProjectNextJS from './pages/project_nextjs'
import ProjectDefault from './pages/project_default'
import FrontendServices from './pages/services_frontend'
import ProjectJavascript from './pages/project_javascript'
import ProjectReact from './pages/project_react'
import BackendServices from './pages/services_backend'
import ProjectPython from './pages/project_python'
import ProjectRedis from './pages/project_redis'
import ProjectGo from './pages/project_go'
import MobileServices from './pages/services_mobile'
import ProjectApple from './pages/project_apple'
import ProjectAndroid from './pages/project_android'
import ProjectAll from './pages/project_all'

import Explore from './pages/explore'
import ExploreSpans from './pages/explore_spans'
import ExploreErrors from './pages/explore_errors'
import ExploreReplays from './pages/explore_replays'
import ExploreLogs from './pages/explore_logs'

import Dashboards from './pages/dashboards'
import AllDashboards from './pages/dashboards_all'
import SavedDashboard1 from './pages/dashboards_saved1'
import SavedDashboard2 from './pages/dashboards_saved2'

import Operations from './pages/operations'
import OverviewOperations from './pages/operations_overview'
import FrontendOperations from './pages/operations_frontend'
import OperationWebVitals from './pages/operation_webvitals'
import OperationUI from './pages/operation_ui'
import OperationAssets from './pages/operation_assets'
import OperationNetwork from './pages/operation_network'
import BackendOperations from './pages/operations_backend'
import OperationQueries from './pages/operation_queries'
import OperationOutbound from './pages/operation_outbound'
import OperationCache from './pages/operation_cache'
import OperationQueues from './pages/operation_queues'
import OperationCrons from './pages/operation_crons'
import OperationUptime from './pages/operation_uptime'
import MobileOperations from './pages/operations_mobile'

import Page from './layouts/page'
import Navigation from './layouts/navigation'

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Issues/>}>
            <Route path='' element={<AllIssues/>} />
            <Route path='saved1' element={<SavedView1/>} />
            <Route path='saved2' element={<SavedView2/>} />
          </Route>
          <Route path='/services' element={<Services/>}>
            <Route path='app' element={<AppServices/>} />
            <Route path='nextjs' element={<ProjectNextJS/>} />
            <Route path='default' element={<ProjectDefault/>} />
            <Route path='frontend' element={<FrontendServices/>} />
            <Route path='javascript' element={<ProjectJavascript/>} />
            <Route path='react' element={<ProjectReact/>} />
            <Route path='backend' element={<BackendServices/>} />
            <Route path='python' element={<ProjectPython/>} />
            <Route path='redis' element={<ProjectRedis/>} />
            <Route path='go' element={<ProjectGo/>} />
            <Route path='mobile' element={<MobileServices/>} />
            <Route path='apple' element={<ProjectApple/>} />
            <Route path='android' element={<ProjectAndroid/>} />
            <Route path='all' element={<ProjectAll/>} />
            <Route path='' element={<Navigate to='/services/app'/>} />      
          </Route>
          <Route path='/operations' element={<Operations/>}>
            <Route path='overview' element={<OverviewOperations/>} />
            <Route path='frontend' element={<FrontendOperations/>} />
            <Route path='webvitals' element={<OperationWebVitals/>} />
            <Route path='ui' element={<OperationUI/>} />
            <Route path='assets' element={<OperationAssets/>} />
            <Route path='network' element={<OperationNetwork/>} />
            <Route path='backend' element={<BackendOperations/>} />
            <Route path='queries' element={<OperationQueries/>} />
            <Route path='outbound' element={<OperationOutbound/>} />
            <Route path='cache' element={<OperationCache/>} />
            <Route path='queues' element={<OperationQueues/>} />
            <Route path='crons' element={<OperationCrons/>} />
            <Route path='uptime' element={<OperationUptime/>} />
            <Route path='mobile' element={<MobileOperations/>} />
            <Route path='all' element={<ProjectAll/>} />
            <Route path='' element={<Navigate to='/operations/overview'/>} />
          </Route>
          <Route path='/explore' element={<Explore/>}>
            <Route path='spans' element={<ExploreSpans/>} />
            <Route path='errors' element={<ExploreErrors/>} />
            <Route path='replays' element={<ExploreReplays/>} />          
            <Route path='logs' element={<ExploreLogs/>} />
            <Route path='' element={<Navigate to='/explore/spans'/>} />
          </Route>
          <Route path='/dashboards' element={<Dashboards/>}>
            <Route path='all' element={<AllDashboards/>} />
            <Route path='saved1' element={<SavedDashboard1/>} />
            <Route path='saved2' element={<SavedDashboard2/>} />
            <Route path='' element={<Navigate to='/dashboards/all'/>} />
          </Route>
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;
