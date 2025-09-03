import { DownloadButton } from "../button/DownloadButton";
import { SaveButton } from "../button/SaveButton";
function Header() {
  return (
    <header className="w-full p-4  flex justify-between items-center">
      <h1 className="text-2xl font-[Dancing_Script,cursive]">Resume Builder</h1>

      <div className="flex justify-between space-x-3">
        <SaveButton />
        <DownloadButton />
      </div>
    </header>
  );
}
export default Header;
