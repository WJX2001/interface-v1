import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';
import ConnectWalletPaper from '../src/components/ConnectWalletPaper';
import { useAccount } from 'wagmi';
import { ContentContainer } from '../src/components/ContentContainer';
import AllContentContainer from '../src/components/AllContentContainer';

export default function Home() {
  const { address, isConnected } = useAccount();
  // return isConnected ? 11 : <ConnectWalletPaper />;
  return (
    <>
      {/* <ContentContainer>
        {isConnected ? 11 : <ConnectWalletPaper />}
      </ContentContainer> */}
       {isConnected ? <AllContentContainer /> : <ConnectWalletPaper />}
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
