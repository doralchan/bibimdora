import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Issues from './pages/issues'
import AllIssues from './pages/issues_all'
import Errors from './pages/issues_errors'
import Metrics from './pages/issues_metrics'
import Craft from './pages/issues_craft'
import Security from './pages/issues_security'
import SavedView1 from './pages/issues_saved1'
import SavedView2 from './pages/issues_saved2'
import Monitors from './pages/issues_monitors'
import Automations from './pages/issues_automations'

import Explore from './pages/explore'
import ExploreSpans from './pages/explore_spans'
import ExploreErrors from './pages/explore_errors'
import ExploreReplays from './pages/explore_replays'
import ExploreProfiles from './pages/explore_profiles'
import ExploreLogs from './pages/explore_logs'

import Dashboards from './pages/dashboards'
import AllDashboards from './pages/dashboards_all'
import SavedDashboard1 from './pages/dashboards_saved1'
import SavedDashboard2 from './pages/dashboards_saved2'

import Operations from './pages/operations'
import OverviewOperations from './pages/operations_overview'
import OperationProjectWeb from './pages/operation_project_web'
import OperationProjectServer from './pages/operation_project_server'
import OperationProjectWorker from './pages/operation_project_worker'
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
import Scrapers from './pages/operations_scrapers'

import Page from './layouts/page'
import Navigation from './layouts/navigation'

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Navigate to='/issues/all'/>}/>
          <Route path='/issues' element={<Issues/>}>
            <Route path='all' element={<AllIssues/>} />
            <Route path='errors' element={<Errors/>} />
            <Route path='metrics' element={<Metrics/>} />
            <Route path='craft' element={<Craft/>} />
            <Route path='security' element={<Security/>} />
            <Route path='saved1' element={<SavedView1/>} />
            <Route path='saved2' element={<SavedView2/>} />
            <Route path='monitors' element={<Monitors/>} />
            <Route path='automations' element={<Automations/>} />
            <Route path='' element={<Navigate to='/issues/all'/>} /> 
          </Route>
          <Route path='/operations' element={<Operations/>}>
            <Route path='overview' element={<OverviewOperations/>} />
            <Route path='web' element={<OperationProjectWeb/>} />
            <Route path='server' element={<OperationProjectServer/>} />
            <Route path='worker' element={<OperationProjectWorker/>} />
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
            <Route path='scrapers' element={<Scrapers/>} />
            <Route path='' element={<Navigate to='/operations/overview'/>} />
          </Route>
          <Route path='/explore' element={<Explore/>}>
            <Route path='spans' element={<ExploreSpans/>} />
            <Route path='errors' element={<ExploreErrors/>} />
            <Route path='replays' element={<ExploreReplays/>} />
            <Route path='profiles' element={<ExploreProfiles/>} />      
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
