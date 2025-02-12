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

import Insights from './pages/insights'
import Overview from './pages/insights_overview'
import InsightsProjectWeb from './pages/insights_project_web'
import InsightsProjectServer from './pages/insights_project_server'
import InsightsProjectWorker from './pages/insights_project_worker'
import InsightsProjectAPI from './pages/insights_project_api'
import InsightsProjectiOS from './pages/insights_project_iOS'
import InsightsUIWeb from './pages/insights_ui_web'
import InsightsAssetsWeb from './pages/insights_assets_web'
import InsightsNetworkWeb from './pages/insights_network_web'
import InsightsQueries from './pages/insights_queries'
import InsightsOutbound from './pages/insights_outbound'
import InsightsCache from './pages/insights_cache'
import InsightsQueues from './pages/insights_queues'
import InsightsCrons from './pages/insights_crons'
import InsightsUptime from './pages/insights_uptime'
import InsightsAppstart from './pages/insights_appstart'
import InsightsScreenloads from './pages/insights_screenloads'
import InsightsUIMobile from './pages/insights_ui_mobile'
import InsightsAssetsMobile from './pages/insights_assets_mobile'
import InsightsNetworkMobile from './pages/insights_network_mobile'

import Settings from './pages/settings'
import Account from './pages/settings_account'
import Preferences from './pages/settings_preferences'
import SecurityPrivacy from './pages/settings_securityprivacy'
import Organization from './pages/settings_organization'
import Services from './pages/settings_services'
import Members from './pages/settings_members'
import Permissions from './pages/settings_permissions'
import Configuration from './pages/settings_config'
import Repos from './pages/settings_repos'
import Integrations from './pages/settings_integrations'
import Billing from './pages/settings_billing'
import Subscription from './pages/settings_subscription'
import RateLimits from './pages/settings_limits'

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
          <Route path='/insights' element={<Insights/>}>
            <Route path='overview' element={<Overview/>} />
            <Route path='web' element={<InsightsProjectWeb/>} />
            <Route path='server' element={<InsightsProjectServer/>} />
            <Route path='worker' element={<InsightsProjectWorker/>} />
            <Route path='api' element={<InsightsProjectAPI/>} />
            <Route path='iOS' element={<InsightsProjectiOS/>} />
            <Route path='ui-web' element={<InsightsUIWeb/>} />
            <Route path='assets-web' element={<InsightsAssetsWeb/>} />
            <Route path='network-web' element={<InsightsNetworkWeb/>} />
            <Route path='queries' element={<InsightsQueries/>} />
            <Route path='outbound' element={<InsightsOutbound/>} />
            <Route path='cache' element={<InsightsCache/>} />
            <Route path='queues' element={<InsightsQueues/>} />
            <Route path='crons' element={<InsightsCrons/>} />
            <Route path='uptime' element={<InsightsUptime/>} />
            <Route path='appstart' element={<InsightsAppstart/>} />
            <Route path='screenloads' element={<InsightsScreenloads/>} />
            <Route path='ui-mobile' element={<InsightsUIMobile/>} />
            <Route path='assets-mobile' element={<InsightsAssetsMobile/>} />
            <Route path='network-mobile' element={<InsightsNetworkMobile/>} />            
            <Route path='' element={<Navigate to='/insights/overview'/>} />
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
          <Route path='/settings' element={<Settings />}>
            <Route path='account' element={<Account/>} />
            <Route path='preferences' element={<Preferences/>} />
            <Route path='securityprivacy' element={<SecurityPrivacy/>} />
            <Route path='organization' element={<Organization/>} />
            <Route path='services' element={<Services/>} />
            <Route path='members' element={<Members/>} />
            <Route path='permissions' element={<Permissions/>} />
            <Route path='config' element={<Configuration/>} />
            <Route path='repos' element={<Repos/>} />
            <Route path='integrations' element={<Integrations/>} />
            <Route path='billing' element={<Billing/>} />
            <Route path='subscription' element={<Subscription/>} />
            <Route path='limits' element={<RateLimits/>} />
            <Route path='' element={<Navigate to='/settings/account'/>} />
          </Route>
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;
