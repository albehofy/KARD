import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
// import { Header } from 'primeng/api';
@Component({
    selector: 'app-common-questions',
    imports: [AccordionModule, InputTextModule, InputIconModule, IconFieldModule, ButtonModule],
    templateUrl: './common-questions.component.html',
    styleUrl: './common-questions.component.css'
})
export class CommonQuestionsComponent {
    dt2: any;
    dt1: any;
    clear(arg0: any) {
        throw new Error('Method not implemented.');
    }

    commonQuestions: any[] = [
        {
            header: 'ماهو الهدف من موقع الويب هذا؟',
            content: 'هذا الموقع يهدف إلى توفير معلومات عن الأمراض النفسية والعلاجات المتاحة لها، وكذلك توفير خدمات الاستشارة عبر الإنترنت.'
        },
        {
            header: 'ما هي الخدمات المقدمة هنا؟',
            content: 'يقدم الموقع مقالات تعليمية، ندوات افتراضية، وخدمات استشارة طبية مخصصة.'
        },
        {
            header: 'من هو الجمهور المستهدف؟',
            content: 'الأشخاص الذين يعانون من اضطرابات نفسية ويرغبون في معرفة المزيد أو الحصول على استشارات متخصصة.'
        },
        {
            header: 'كيف يمكنني الوصول إلى الخدمات؟',
            content: 'يمكنك التسجيل وإنشاء حساب للوصول إلى خدمات الاستشارة ومشاهدة المحتوى التعليمي.'
        },
        {
            header: 'هل تتوفر خدمات مجانية؟',
            content: 'نعم، يتوفر العديد من المقالات والموارد المجانية، مع خيارات مدفوعة للاستشارات المخصصة.'
        },
        {
            header: 'ما هي فوائد استخدام الموقع؟',
            content: 'يوفر معلومات دقيقة وشاملة، إمكانية التواصل مع خبراء، ودعم لتحسين الصحة النفسية.'
        },
        {
            header: 'هل يمكنني التواصل مع الخبراء مباشرة؟',
            content: 'نعم، من خلال خدمات الاستشارة عبر الإنترنت يمكنك حجز جلسة مع أحد الخبراء.'
        }
    ]

    questions: any[] = this.commonQuestions;
    
    searchingofQuestion(value: string) {
        this.questions = this.commonQuestions.filter((val) =>
            val.header.toLowerCase().includes(value.toLowerCase()) ||
            val.content.toLowerCase().includes(value.toLowerCase())
        );
        console.log(this.questions);
    }
    
}
