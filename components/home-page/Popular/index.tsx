import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
  SelectItemBackground,
  SelectItemSize,
} from '../../ui-kit/Select/enums';
import Select from '../../ui-kit/Select';
import { ReactSlick } from '../../ui-kit';
import { useAdaptiveSlider } from '../../../common/hooks/useAdaptiveSlider';
import { devices, screenSizes } from '../../../common/constants';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { TUserInteractionsState } from '../../../redux/slicers/userInteractionsSlicer/types';
import {
  getCreators,
  getSellers,
} from '../../../redux/slicers/userInteractionsSlicer/userInteractionsSlicer';
import { SelectTypes } from '../../ui-kit/Select/constants';

import ParticipantItem from './ParticipantItem';
import { dates, PopularTypes, POPULAR_TYPES } from './constants';

const Popular = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [currentPopular, setCurrentPopular] = useState<string>('');

  const { sellers, creators } = useAppSelector<TUserInteractionsState>(
    (state) => state.userInteractions,
  );

  const { screenSize, slidesPerRow } = useAdaptiveSlider(5);

  const handleParticipantClick = (id: string) => () => {
    router.push(`profile/${id}`);
  };

  const handleCurrentPopularChange = (value: string) => {
    setCurrentPopular(value);
  };

  useEffect(() => {
    dispatch(getSellers());
    dispatch(getCreators());
  }, [dispatch]);

  return (
    <PopularWrapper>
      <ContentContainer>
        <SectionHeader>
          <SectionTitles>
            <SectionTitle>Popular</SectionTitle>
            <SectionSelect>
              <Select
                items={POPULAR_TYPES}
                background={SelectItemBackground.White}
                onChange={handleCurrentPopularChange}
                size={SelectItemSize.Medium}
                style={{ width: '256px' }}
                type={SelectTypes.SECONDARY}
                defaultValue={POPULAR_TYPES[0]}
                value={currentPopular as any}
              />
            </SectionSelect>
          </SectionTitles>
          <TimeframeWrapper>
            <SelectLabel>Timeframe</SelectLabel>
            <Select
              items={dates}
              background={SelectItemBackground.None}
              size={SelectItemSize.Medium}
              style={{
                width: screenSize > screenSizes.mobileL ? '256px' : '100%',
              }}
            />
          </TimeframeWrapper>
        </SectionHeader>
        <ReactSlick screenSize={screenSize} slidesPerRow={slidesPerRow}>
          {currentPopular === PopularTypes.CREATORS
            ? creators?.map(({ sum, creator, _id }, index) => (
                <ParticipantItem
                  key={`participant-item-${index}`}
                  name={creator.username}
                  avoAmount={sum}
                  avatar={creator.avatar}
                  isVerified={creator.isVerified}
                  rank={index + 1}
                  onParticipantClick={handleParticipantClick(_id)}
                />
              ))
            : sellers?.map(({ sum, owner, _id }, index) => (
                <ParticipantItem
                  key={`participant-item-${index}`}
                  name={owner.username}
                  avoAmount={sum}
                  avatar={owner.avatar}
                  isVerified={owner.isVerified}
                  rank={index + 1}
                  onParticipantClick={handleParticipantClick(_id)}
                />
              ))}
        </ReactSlick>
      </ContentContainer>
    </PopularWrapper>
  );
};

const PopularWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  padding: 128px 144px;
  margin-top: 128px;
  height: 663px;

  @media (${devices.mobile}) {
    padding: 64px 15px;
    margin-top: 64px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${devices.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SectionTitles = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.7);
`;

const SectionSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SectionSelectTitle = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.01em;
  color: #23262f;

  @media (${devices.mobile}) {
    display: block;
  }
`;

const TimeframeWrapper = styled.div`
  @media (${devices.mobile}) {
    margin-top: 24px;
    width: 100%;
  }
`;

const SelectLabel = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
`;

// const Participants = styled.div`
//   position: relative;
//   margin-top: 64px;
//   display: flex;
//   align-items: flex-start;
//   gap: 32px;
// `;

export default Popular;
