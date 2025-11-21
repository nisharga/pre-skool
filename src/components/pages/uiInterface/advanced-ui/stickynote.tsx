"use client";
import { all_routes } from '@/router/all_routes';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ReactStickyNotes = dynamic(
  () => import('@react-latest-ui/react-sticky-notes').then((m) => m.default || m),
  { ssr: false, loading: () => null }
);

const routes = all_routes;
const StickynoteComponent = () => {
  return (
    <div className="page-wrapper cardhead">
      <div className="content ">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Sticky Note</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href={routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Sticky Note</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Sticky */}
          <div className="col-md-12">
            <div className="card">
              {/* <div className="sticky-note" id="board" /> */}

              <ReactStickyNotes />
            </div>
          </div>
          {/* /Sticky */}
        </div>
      </div>
    </div>
  );
};

export default StickynoteComponent;
