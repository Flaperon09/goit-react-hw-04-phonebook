import { FeedbackTitle } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
        <section>
            <FeedbackTitle>{title}</FeedbackTitle>
            {children}
        </section>
    );
};