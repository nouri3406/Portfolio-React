import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ControlRoom from "./pages/ControlRoom";
import DossierOperateur from "./pages/DossierOperateur";
import ArsenalTechnique from "./pages/ArsenalTechnique";
import Missions from "./pages/Missions";
import CaseFiles from "./pages/CaseFiles";
import CanalDirect from "./pages/CanalDirect";
import CaseFileDetail from "./pages/CaseFileDetail";

export default function App() {
  return (
    <Routes>
      {/* ✅ HOME SANS SIDEBAR */}
      <Route path="/" element={<Home />} />

      {/* ✅ PAGES AVEC SIDEBAR : chaque page gère Layout */}
      <Route path="/control-room" element={<ControlRoom />} />
      <Route path="/dossier-operateur" element={<DossierOperateur />} />
      <Route path="/arsenal-technique" element={<ArsenalTechnique />} />
      <Route path="/missions-deployees" element={<Missions />} />
      <Route path="/case-files" element={<CaseFiles />} />
      <Route path="/case-files/case-01" element={<CaseFileDetail />} />
      <Route path="/canal-direct" element={<CanalDirect />} />
    </Routes>
  );
}